import { modifier } from 'ember-modifier';

export default modifier(
  (element, [keyframes, timing], { onFinish, onCancel }) => {
    const animation = element.animate(keyframes, timing);

    animation.finished
      .then(() => onFinish?.())
      .catch((error) => onCancel?.(error));

    return () => {
      animation.cancel();
    };
  }
);
