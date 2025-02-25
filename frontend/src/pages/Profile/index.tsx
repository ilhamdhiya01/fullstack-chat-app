import ProfileForm from "../../components/module/Profile/ProfileForm";
import { useAuth } from "../../hooks/auth";
import { formatOptionDate } from "../../utils/helpers";

const ProfilePage = () => {
  const { userAuthenticated } = useAuth();
  return (
    <div className="h-fit pt-16 md:pt-20">
      <div className="max-w-md md:max-w-2xl mx-auto p-2 md:p-4 py-6 md:py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-semibold ">Profile</h1>
            <p className="mt-1 md:mt-2">Your profile information</p>
          </div>

          <ProfileForm />

          <div className="mt-4 md:mt-6 bg-base-300 rounded-xl p-4 md:p-6">
            <h2 className="text-base md:text-lg font-semibold  mb-4">
              Account Information
            </h2>
            <div className="space-y-3 text-xs md:text-base">
              <div className="flex items-center justify-between py-2 border-b border-base-content/30">
                <span>Member Since</span>
                <span>
                  {formatOptionDate(
                    userAuthenticated?.createdAt as string,
                    "DD MMM YYYY",
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
