/* eslint-disable react/jsx-no-target-blank */
import { Card, message } from "antd";
import { CrownTwoTone, MessageTwoTone, HeartTwoTone } from "@ant-design/icons";
import { map } from "lodash";

import {
  chatPet,
  chatPetLink,
  patPet,
  patPetLink,
  activatePet,
  petPageLink,
} from "./utilities/petFuncs";

const Pets = ({ data }) =>
  map(data.pet_list, (pet) => {
    return (
      <Card
        key={`${pet.id}`}
        cover={
          <a href={petPageLink(pet.id)} target="_blank" rel="noreferrer">
            <img src={pet.image} alt="" />
          </a>
        }
        actions={[
          // <div
          //   key="Activate Pet"
          //   alt="Activate Pet"
          //   onClick={() => activatePet(cookie, pet.id, data.active_num)}
          //   target="_blank"
          //   rel="next"
          // >
          //   <CrownTwoTone twoToneColor="#faad14" />
          // </div>,
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
  });

export default Pets;
