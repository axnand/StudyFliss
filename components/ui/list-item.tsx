import { cn } from '@/utils/cn';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import { GraduationCap } from 'lucide-react';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import Logo from '../icons/Logo';

const CoursesListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex justify-start items-center gap-2',
                            className
                        )}
                        {...props}
                    >
                        <GraduationCap className="lg:size-6 lg:block hidden" />
                        <div>
                            <div className="text-sm font-bold leading-none flex flex-row gap-1 items-center">
                                {title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {children}
                            </p>
                        </div>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);

CoursesListItem.displayName = 'CoursesListItem';

const AboutUsListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex justify-start items-center gap-2',
                            className
                        )}
                        {...props}
                    >
                        <Logo className="lg:size-6 lg:block hidden" />
                        <div>
                            <div className="text-sm font-bold leading-none flex flex-row gap-1 items-center">
                                {title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {children}
                            </p>
                        </div>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);

AboutUsListItem.displayName = 'AboutUsListItem';

export { CoursesListItem, AboutUsListItem };
