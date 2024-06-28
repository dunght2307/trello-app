import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Logo = () => {
    return (
        <Link href={'/'}>
            <div className="hover:opacity-75 gap-x-2 flex items-end">
                <Image src="/logo.svg" alt="logo" height={35} width={35} />
                <p className="text-2xl text-neutral-700 font-bold">Trello</p>
            </div>
        </Link>
    );
};
