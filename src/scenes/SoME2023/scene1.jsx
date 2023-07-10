import {Latex} from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import {createRef} from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  const tex = createRef(Latex);
  view.add(
    <Latex
      ref={tex}
      tex="{\color{white} x = \sin \left( \frac{\pi}{2} \right)}"
      y={0}
      width={400} // height and width can calculate based on each other
    />,
  );

    tex().opacity(0);
    yield* waitUntil('start');
    yield* tex().opacity(1, 0.5);
    yield* waitUntil('animate');
    yield* tex().scale(2, 1);
    yield* waitUntil('end');
    yield* tex().opacity(0, 1);
});
