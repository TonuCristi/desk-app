export const PROFILE_PAGE = {
  TITLE: "Profile",
  EDIT_PROFILE_SECTION: {
    TITLE: "Profile edit",
    EDIT_INPUTS: [
      {
        LABEL: "Username",
        HTML_FOR: "username",
        PLACEHOLDER: "Username",
        NAME: "username",
      },
      {
        LABEL: "Email",
        HTML_FOR: "email",
        PLACEHOLDER: "Email",
        NAME: "email",
      },
    ] as const,
    BUTTON: "Save",
  },
  RESET_PASSWORD_SECTION: {
    TITLE: "Reset password",
    EDIT_INPUTS: [
      {
        LABEL: "New password",
        HTML_FOR: "newPassword",
        PLACEHOLDER: "New password",
        NAME: "newPassword",
      },
      {
        LABEL: "Repeat new password",
        HTML_FOR: "repeatNewPassword",
        PLACEHOLDER: "Repeat new password",
        NAME: "repeatNewPassword",
      },
    ] as const,
    BUTTON: "Reset",
  },
};
