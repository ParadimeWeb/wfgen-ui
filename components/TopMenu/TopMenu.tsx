"use client"
import { makeStyles, Toolbar, Overflow, OverflowItem, ToolbarGroup, ToolbarButton, Button, Dialog, DialogTrigger, DialogSurface, DialogBody, DialogTitle, DialogContent, DialogActions, Persona } from "@fluentui/react-components";
import { SettingsRegular } from '@fluentui/react-icons';
import { OverflowMenu } from "./Overflow";
import Image from "next/image";

const useStyles = makeStyles({
    toolbar: {
        flexGrow: 1,
        '& a': {
            minWidth: 'auto'
        }
    },
    overflowToolbarGroup: {
        display: 'flex',
        flexGrow: 1, 
        flexWrap: 'nowrap'
    },
    persona: {
        verticalAlign: 'middle'
    }
});

export const TopMenu = ({ selectedId }: { selectedId?: string; }) => {
    const styles = useStyles();
    return <Toolbar className={styles.toolbar}>
        <Image alt="WorkflowGen" src="/workflowgen.png" width={32} height={32} />
        <Overflow>
            <ToolbarGroup role="presentation" className={styles.overflowToolbarGroup}>
                <OverflowItem id="home">
                    <ToolbarButton as="a" href="/">Home</ToolbarButton>
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
            <Persona className={styles.persona} textAlignment="center" name="Gabriel Beauchamp" />
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