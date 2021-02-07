import { PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';

import { removeKeycap } from '../reducer';
import {
  Position,
  RemoveKeyboardPayload,
  UpdateKeyboardPayload,
} from '../reducer/keyboard';
import { KeycapSize } from '../types';

interface RemoveButtonProps {
  size: KeycapSize;
  id: string;
  position: Position;
  styles?: React.CSSProperties;
}

const RemoveButton: React.FC<RemoveButtonProps> = (
  props: RemoveButtonProps
) => {
  const dispatch = useDispatch();
  const remove = removeKeycap({
    position: props.position,
  });
  const styles = props.styles;

  return (
    <div
      onClick={(): PayloadAction<RemoveKeyboardPayload> => dispatch(remove)}
      style={styles}>
      [x]
    </div>
  );
};

export default RemoveButton;
