import ChangePasswordSection from "../components/profile/ChangePasswordSection";
import EditProfileSection from "../components/profile/EditProfileSection";

import { PROFILE_PAGE } from "../constants/profilePage";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <h1 className="text-4xl">{PROFILE_PAGE.TITLE}</h1>
      <div className="m-auto flex w-full flex-col gap-10 xssm:w-11/12 xsm:w-3/4 sm:w-2/3 lg:w-1/2">
        <EditProfileSection />
        <ChangePasswordSection />
      </div>
    </div>
  );
}
