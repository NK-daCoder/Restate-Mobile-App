import { Account, Avatars, Client, Databases, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking"
import { openAuthSessionAsync } from "expo-web-browser";

// Authentication

export const config = {
    platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITEDATABASE_ID,
    agentsCollection: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
    galleryCollection: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    reviewsCollection: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
    propertiesCollection: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID
}

export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

export const avatar = new Avatars(client);
export const account = new Account(client);

export const databases = new Databases(client);


export const login = async () => {
    try {
        // Create a redirect URI for OAuth callback
        const redirectUri = Linking.createURL("/");

        // Request an OAuth2 token from Google provider
        const response = await account.createOAuth2Token(
            OAuthProvider.Google, redirectUri
        )

        // Check if we got a valid response
        if(!response) {
            throw new Error("❌ Failed to login, error happend on line 30")
        }

        // Open browser for user authentication
        const browserResult = await openAuthSessionAsync(
            response.toString(),
            redirectUri
        )

        // Verify the authentication was successful
        if (browserResult.type !== "success") {
            throw new Error("🔴 Login not successfull, code error on line 39");
        }

        // Parse the callback URL to get authentication parameters
        const url = new URL(browserResult.url);
        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();

        // Verify we received both required parameters
        if (!secret || !userId) {
            throw new Error(`🔴 Failed to login because there is no userID nor secret UserId: ${userId} userSecrete: ${secret}`)
        }

        // If all checks passed, create a new session
        const session = await account.createSession(userId, secret);

        return session

    } catch (error) {
        // Log any errors and return false to indicate login failure
        console.log(error);
        return false;
    }
}

export const logout = async () => {
    try {
        const result = await account.deleteSession("current");
        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const getCurrentUser = async () => {
    try {
        // 👤 Step 1: Fetch current user account data
        const result = await account.get();

        // ✅ Step 2: Check if valid user data exists
        if (result.$id) {
            // 🖼️ Step 3: Generate avatar initials from user's name
            const userAvatar = avatar.getInitials(result.name);

            return {
                ...result,
                avatar: userAvatar.toString(), // Convert avatar to string
            };
        }

        // ⚠️ No valid user found (logged out or session expired)
        return null;

    } catch (error) {
        // ❌ Error handling
        console.log("🔴 Failed to fetch current user:", error);
        
        // ⚠️ Return null to indicate no current user
        return null;
    }
}
  




