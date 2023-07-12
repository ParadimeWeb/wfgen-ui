"use client"
import { makeStyles, Toolbar, Overflow, OverflowItem, ToolbarGroup, ToolbarButton, Button, Dialog, DialogTrigger, DialogSurface, DialogBody, DialogTitle, DialogContent, DialogActions, Persona, tokens, mergeClasses } from "@fluentui/react-components";
import { SettingsRegular } from '@fluentui/react-icons';
import { OverflowMenu } from "./Overflow";
import Image from "next/image";

const useStyles = makeStyles({
    selected: {
        backgroundColor: tokens.colorNeutralBackground1Hover,
        color: tokens.colorNeutralForeground2Hover
    }
});

export const TopMenu = ({ selectedId }: { selectedId?: string; }) => {
    const styles = useStyles();
    return <Toolbar className="grow [&_a]:min-w-0">
        <Image alt="WorkflowGen" src="/workflowgen.png" width={32} height={32} className="mr-1" />
        <Overflow>
            <ToolbarGroup role="presentation" className="flex grow flex-nowrap">
                <OverflowItem id="home">
                    <ToolbarButton as="a" href="/" className={mergeClasses(selectedId === 'home' && styles.selected)}>Home</ToolbarButton>
                </OverflowItem>
                <OverflowItem id="views">
                    <ToolbarButton as="a" href="/">Views</ToolbarButton>
                </OverflowItem>
                <OverflowItem id="delegations">
                    <ToolbarButton as="a" href="/">Delegations</ToolbarButton>
                </OverflowItem>
                <OverflowItem id="search">
                    <ToolbarButton as="a" href="/">Search</ToolbarButton>
                </OverflowItem>
                <OverflowMenu selectedId={selectedId} />
            </ToolbarGroup>
        </Overflow>
        <ToolbarGroup role="presentation">
            <Persona className="align-middle" textAlignment="center" name="Gabriel Beauchamp" />
            <Dialog>
                <DialogTrigger disableButtonEnhancement>
                    <ToolbarButton icon={<SettingsRegular />} />
                </DialogTrigger>
                <DialogSurface>
                    <DialogBody>
                        <DialogTitle>Information</DialogTitle>
                        <DialogContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            exercitationem cumque repellendus eaque est dolor eius expedita
                            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
                            in natus iure cumque eaque?
                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="secondary">Close</Button>
                            </DialogTrigger>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
        </ToolbarGroup>
    </Toolbar>;
};