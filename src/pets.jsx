/* eslint-disable react/jsx-no-target-blank */
import { Card } from "antd";
import { MessageTwoTone, HeartTwoTone } from "@ant-design/icons";
import { map } from "lodash";

import {
  chatPetLink,
  patPetLink,
  petPageLink,
} from "./utilities/petFuncs";

const Pets = ({ data }) => (
  <div className="pets-list">
    {map(data.pet_list, (pet) => {
      return (
        <Card
          key={`${pet.id}`}
          cover={
            <a href={petPageLink(pet.id)} target="_blank" rel="noreferrer">
              <img src={pet.image} alt="" />
            </a>
          }
          actions={[
            <a
              key="Pat Pet"
              alt="Pat Pet"
              href={patPetLink(pet.id)}
              target="_blank"
              rel="noreferrer"
            >
              <HeartTwoTone twoToneColor="#cf1322" />
            </a>,
            <a
              key="Chat Pet"
              alt="Chat Pet"
              href={chatPetLink(pet.id)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageTwoTone twoToneColor="#597ef7" />
            </a>,
          ]}
        >
          <Card.Meta title={pet.name} />
        </Card>
      );
    })}
  </div>
);

export default Pets;
