/* eslint-disable react/jsx-no-target-blank */
import { Avatar } from "antd";
import { map } from "lodash";

import recipeLists from "./data/alch_recipies";

const Alchemy = () => (
  <div className="alchemy">
    {map(recipeLists, (categoryList, index) => (
      <div className="alchemy-category">
        <div className="category-header">{index}</div>
        <div className="category-list">
          {map(categoryList, (recipe) => (
            <a
              href={recipe.link}
              alt=""
              target="_blank"
              rel="norefferer"
              key={recipe.link}
            >
              <Avatar
                className={recipe.hatchable ? "hatch-item" : ''}
                src={recipe.image}
                size={75}
              />
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Alchemy;
