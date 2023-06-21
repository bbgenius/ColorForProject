/* eslint-disable react/prop-types */

import { nanoid } from 'nanoid';
const ColorsContainer = ({ colorList, toast }) => {
  // const idUnique = nanoid();
  return (
    <div className='colors_container'>
      {colorList.map((colorItem) => {
        const idItem = nanoid();
        const { hex, type, weight } = colorItem;
        let colorText = type === 'tint' ? '#000' : '#fff';
        const handleCopy = (hexCopy) => {
          try {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(hexCopy).then(() => {
                toast.success(`copied color: ${hexCopy}`, {
                  position: toast.POSITION.TOP_CENTER,
                });
              });
            }
          } catch (error) {
            toast.error(error.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        };
        return (
          <div
            className='color_item'
            key={idItem}
            style={{
              backgroundColor: `#${hex}`,
              color: `${colorText}`,
            }}
            onClick={() => {
              handleCopy(`#${hex}`);
            }}
          >
            <span className='weight'>{weight}%</span>
            <span className='hex'>#{hex}</span>
          </div>
        );
      })}
    </div>
  );
};
export default ColorsContainer;
