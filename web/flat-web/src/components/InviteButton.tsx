import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { RoomItem } from "../stores/RoomStore";
import { InviteModal } from "./Modal/InviteModal";
import { TopBarRightBtn } from "flat-components";

export interface InviteButtonProps {
    roomInfo?: RoomItem;
}

export const InviteButton = observer<InviteButtonProps>(function InviteButton({ roomInfo }) {
    const [isShowInviteModal, showInviteModal] = useState(false);
    const hideInviteModal = (): void => showInviteModal(false);
    return (
        <div>
            <TopBarRightBtn
                title="Invite"
                icon={<img src="/src/assets/image/invite.svg" />}
                onClick={() => showInviteModal(true)}
            />
            {roomInfo && (
                <InviteModal
                    room={roomInfo}
                    visible={isShowInviteModal}
                    onCopied={hideInviteModal}
                    onCancel={hideInviteModal}
                />
            )}
        </div>
    );
});

export default InviteButton;
