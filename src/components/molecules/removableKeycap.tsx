import { PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';

import { updateKeycap } from '../../reducer';
import {
  InsertKeycapPayload,
  Position,
  UpdateKeyboardPayload,
} from '../../reducer/keyboard';
import { KeycapSize } from '../../types';
import Keycap from '../keycap';
import RemoveButton from '../removeButton';

interface RemovableKeycapProps {
  size: KeycapSize;
  _key: string;
  selected: boolean;
  position: Position;
}

const RemovableKeycap: React.FC<RemovableKeycapProps> = (
  props: RemovableKeycapProps
) => {
  const dispatch = useDispatch();
  const toggleSelectAction: PayloadAction<InsertKeycapPayload> = updateKeycap({
    position: props.position,
    usedKey: {
      id: props._key,
      selected: !props.selected,
    },
    size: props.size,
  });

  return (
    <Keycap
      _key={props._key}
      size={props.size}
      onClick={(): PayloadAction<UpdateKeyboardPayload> =>
        dispatch(toggleSelectAction)
      }>
      <RemoveButton
        size={props.size}
        position={props.position}
        styles={{
          visibility: props.selected ? 'visible' : 'hidden',
          position: 'absolute',
          bottom: 0,
        }}
      />
    </Keycap>
  );
};

export default RemovableKeycap;
