import { useState } from "react";
import { Card, Select, Form, Empty, Badge } from "antd";

import "./app.css";
import tig from "./data/tig";
import prei from "./data/prei";
import Pets from "./pets";
import Alchemy from "./alchemy";

const { Ribbon } = Badge;

const App = () => {
  const [user, setUser] = useState("tig");
  const [view, setView] = useState("pets");

  return (
    <Card
      className="app"
      bordered={false}
      title={
        <div className="app-header">
          DV Click Helper
          <Form className="header-controls" layout="inline" size="large">
            {view === "pets" && (
              <Form.Item label="User">
                <Select
                  value={user}
                  onChange={(value) => setUser(value)}
                  options={[
                    { label: "Tig", value: "tig" },
                    { label: "Preicia", value: "prei" },
                  ]}
                />
              </Form.Item>
            )}
            <Form.Item label="Page">
              <Select
                value={view}
                onChange={(value) => setView(value)}
                options={[
                  { label: "Pets", value: "pets" },
                  { label: "Alchemy", value: "alchemy" },
                ]}
              />
            </Form.Item>
          </Form>
        </div>
      }
    >
      <div className="app-content">
        {view === "pets" ? (
          user === "tig" ? (
            <Pets data={tig} />
          ) : user === "prei" ? (
            <Pets data={prei} />
          ) : (
            <Empty />
          )
        ) : view === "alchemy" ? (
          <Ribbon
            className="alch-source-ribbon"
            text={
              <a
                href="https://dappervolk.com/forum/topic/14829-alchemy-recipe-buttons"
                target="_blank"
                rel="noreferrer"
              >
                Source Thread
              </a>
            }
          >
            <Alchemy />
          </Ribbon>
        ) : (
          <Empty />
        )}
      </div>
    </Card>
  );
};

export default App;
