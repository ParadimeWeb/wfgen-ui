"use client"
import { Button, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, useOverflowMenu, useIsOverflowItemVisible } from "@fluentui/react-components";
import { MoreHorizontal20Filled } from '@fluentui/react-icons';

const ToolbarOverflowMenuItem = ({ id, children }: { id: string; children: React.ReactNode; }) => {
    const isVisible = useIsOverflowItemVisible(id);
    return isVisible ? null : children;
};
export const OverflowMenu = ({ selectedId }: { selectedId?: string; }) => {
    const { ref, isOverflowing } = useOverflowMenu<HTMLButtonElement>();
    if (!isOverflowing) {
        return null;
    }
    return <Menu>
        <MenuTrigger disableButtonEnhancement>
            <Button 
                ref={ref}
                icon={<MoreHorizontal20Filled />}
                aria-label="More items"
                appearance="subtle"
            />
        </MenuTrigger>
        <MenuPopover>
            <MenuList>
                
            </MenuList>
        </MenuPopover>
    </Menu>;
};