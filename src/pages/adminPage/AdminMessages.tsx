import styled from "@emotion/styled";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EmptyChat from "./ItemAdminMessages.tsx/EmptyChat";
import Menu from "./ItemAdminMessages.tsx/Menu";
import ChatBoxAdmin from "./ItemAdminMessages.tsx/ChatBoxAdmin";
import { useState } from "react";

const Component = styled.div`
    display: flex;
    align-items: center;
`;

const LeftComponent = styled.div`
    width: 400px;
    height: 100%;
`;

const RightComponent = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.14);
`;

const AdminMessages = () => {
  const [chatId, setChatId] = useState<number>(0);
  return (
    <div>
      <Header />
      <Component>
        <LeftComponent>
          <Menu setChatId={setChatId} />
        </LeftComponent>
        <RightComponent>
          {
            chatId !== 0 ? <ChatBoxAdmin chatId={chatId} /> : <EmptyChat />
          }
        </RightComponent>
      </Component>
      <Footer />
    </div>
  )
}

export default AdminMessages;
