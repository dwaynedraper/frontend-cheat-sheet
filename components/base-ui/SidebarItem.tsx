import React from 'react';
import Link from 'next/link';

type SidebarProps = {
  value: string
  href: string
};

/**
 * *SidebarItem is a single item in the sidebar.
 * NOTE: Two items may not share the same value, as they are used for the index.
 *  They will have to be serialized in some way.
 * TODO: Add links to the items.
 * @param props - The value of the item.
 * @returns JSX.Element
 */
export default function SidebarItem(props: SidebarProps): JSX.Element {
  return (
    <li className='sidebar-item'><Link href={props.href}>{props.value}</Link></li>
  )
}
