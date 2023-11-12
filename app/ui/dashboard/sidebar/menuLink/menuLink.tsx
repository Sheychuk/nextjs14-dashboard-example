"use client"
import Link from 'next/link';
import styles from './menuLink.module.css';
import { usePathname } from 'next/navigation';

type MenuLinkProps = {
    icon: React.ReactNode;
    title: string;
    href: string;
}

export default function MenuLink(
    {
        icon,
        title,
        href
    }: MenuLinkProps
) {
    const pathname = usePathname();
    return (
      <Link href={href} className={`${styles.container} ${pathname === href && styles.active}`}>
        {icon}
        {title}
      </Link>
    )
}