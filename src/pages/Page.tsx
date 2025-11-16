import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import {Chat, ChatRef} from "@/pages/chat/chat.tsx";
import { useRef } from "react";
import {Route, Routes} from "react-router-dom";

export default function Page() {

    const chatRef = useRef<ChatRef>(null);

    const handleClearChat = () => {
        chatRef.current?.resetChat();
    };


    return (
        <SidebarProvider>
            <AppSidebar onResetChat={handleClearChat} />
            <SidebarInset>
                <Routes>
                    <Route path="/" element={<Chat ref={chatRef} />} />
                </Routes>

            </SidebarInset>
        </SidebarProvider>
    )
}
