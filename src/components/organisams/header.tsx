import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface HeaderProps {
    onBurgerClick: () => void;
    isMobile: boolean;
}

export function Header({ onBurgerClick, isMobile }: HeaderProps) {
    return (
        <header className="flex items-center justify-between h-16 px-6 bg-card/30 shadow-md">
            {/* LEFT SECTION */}
            {!isMobile && (
                <div className="flex items-center gap-4">
                    <img
                        src="/burger.svg"
                        alt="Burger"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                        onClick={onBurgerClick}
                    />
                    <img src="/Wallet.svg" alt="Wallet" width={20} height={20} />
                    <div className="flex items-center relative max-w-md rounded-2xl">
                        <img src="/search.svg" alt="Search" className="absolute left-3" width={20} height={20} />
                        <Input
                            placeholder="Type any cryptocurrency..."
                            className="pl-9 w-80 bg-background/50 focus:bg-background rounded-2xl"
                        />
                    </div>
                </div>
            )}

            {isMobile && (
                <div className="flex px-10 ">
                    <div className="relative max-w-full rounded-2xl">
                        <img src="/search.svg" alt="Search" className="absolute left-3 top-1/2 -translate-y-1/2" width={20} height={20} />
                        <Input
                            placeholder="Search..."
                            className="pl-9 w-56 md:w-full bg-background/50 focus:bg-background rounded-2xl"
                        />
                    </div>
                </div>
            )}

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">
                {!isMobile && (
                    <>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CU</AvatarFallback>
                        </Avatar>
                        <img src="/Setting.svg" alt="Settings" width={20} height={20} />
                        <img src="/Bell.svg" alt="Notifications" width={20} height={20} />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent">
                                    <img src="/US.svg" alt="Country" width={20} height={20} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem><img src="/US.svg" alt="US" width={20} height={20} /> US</DropdownMenuItem>
                                <DropdownMenuItem><img src="/JP.svg" alt="JP" width={20} height={20} /> JP</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><img src="/FR.svg" alt="FR" width={20} height={20} /> FR</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                )}

                {isMobile && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CU</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <img src="/Setting.svg" alt="Settings" className="mr-2" width={16} height={16} />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <img src="/Bell.svg" alt="Notifications" className="mr-2" width={16} height={16} />
                                Notifications
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <img src="/US.svg" alt="US" className="mr-2" width={16} height={16} />
                                US
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </header>
    );
}
