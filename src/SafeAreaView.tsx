import * as React from 'react';
import type {
  Edge,
  EdgeMode,
  EdgeRecord,
  NativeSafeAreaViewInstance,
  NativeSafeAreaViewProps,
} from './SafeArea.types';
import NativeSafeAreaView from './specs/NativeSafeAreaView';
import { useMemo } from 'react';

const defaultEdges: Record<Edge, EdgeMode> = {
  top: 'additive',
  left: 'additive',
  bottom: 'additive',
  right: 'additive',
};

export type SafeAreaViewProps = NativeSafeAreaViewProps;

export const SafeAreaView = React.forwardRef<
  NativeSafeAreaViewInstance,
  SafeAreaViewProps
>(({ edges, ...props }, ref) => {
  const nativeEdges = useMemo(() => {
    const _edges = Array.isArray(edges)
      ? edges.reduce<EdgeRecord>((accum, edge) => {
          accum[edge] = 'additive';
          return accum;
        }, {})
      : edges;

    if (_edges === undefined) {
      return defaultEdges;
    }

    // make sure that we always pass all edges, required for fabric
    const requiredEdges: Record<Edge, EdgeMode> = {
      top: _edges.top ?? 'off',
      right: _edges.right ?? 'off',
      bottom: _edges.bottom ?? 'off',
      left: _edges.left ?? 'off',
    };

    return requiredEdges;
  }, [edges]);

  return <NativeSafeAreaView {...props} edges={nativeEdges} ref={ref} />;
});
