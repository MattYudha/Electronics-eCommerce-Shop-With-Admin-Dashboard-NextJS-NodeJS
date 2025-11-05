import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback, or the `user` object returned from the `credentials` provider.
   */
  interface User extends DefaultUser {
    id: string;
    role: string;
  }

  /**
   * The shape of the Account object returned in the OAuth providers' `account` callback.
   */
  interface Account {
    provider: string;
    type: string;
    id: string;
    accessToken?: string;
    refreshToken?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
  }

  /**
   * The shape of the NextAuthOptions object.
   */
  interface NextAuthOptions {
    providers: any[]; // Simplified for now, can be more specific if needed
    callbacks?: {
      signIn?: (params: { user: User; account: Account; profile?: any; email?: { verificationRequest?: boolean }; credentials?: Record<string, any> }) => boolean | string | Promise<boolean | string>;
      redirect?: (params: { url: string; baseUrl: string }) => string | Promise<string>;
      session?: (params: { session: Session; token: JWT; user: User }) => Session | Promise<Session>;
      jwt?: (params: { token: JWT; user: User; account: Account; profile?: any; isNewUser?: boolean }) => JWT | Promise<JWT>;
    };
    pages?: {
      signIn?: string;
      signOut?: string;
      error?: string;
      verifyRequest?: string;
      newUser?: string;
    };
    session?: {
      strategy?: "jwt" | "database";
      maxAge?: number;
      updateAge?: number;
    };
    jwt?: {
      secret?: string;
      maxAge?: number;
      encode?: (params: { token: JWT; secret: string; maxAge: number }) => string | Promise<string>;
      decode?: (params: { token: string; secret: string }) => JWT | null | Promise<JWT | null>;
    };
    secret?: string;
    debug?: boolean;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: string;
    role: string;
    iat?: number;
  }
}
