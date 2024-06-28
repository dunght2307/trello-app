import { UserButton } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';

const ProtectedPage = async () => {
    // const user = await currentUser();
    // const { userId } = auth();
    return (
        <div>
            {/* User: {user?.firstName}
            UserID: {userId} */}
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};
export default ProtectedPage;
