import { User } from "@supabase/supabase-js";

export function mapUser(user: User) {
  return {
    username: user.user_metadata.username,
    email: user.user_metadata.email,
    createdAt: user.created_at,
  };
}
