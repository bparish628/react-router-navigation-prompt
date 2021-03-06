import * as React from 'react';
import * as H from 'history';
import { RouteComponentProps, Omit } from 'react-router';

declare module 'react-router-navigation-prompt' {
  export interface ChildData {
    isActive: boolean;
    onCancel: () => void;
    onConfirm: () => void;
  }

  export interface NavigationPromptProps extends RouteComponentProps<any> {
    children: (data: ChildData) => React.ReactNode;
    when: boolean | ((currentLocation: H.Location, nextLocation?: H.Location) => boolean);
    afterCancel?: () => void;
    afterConfirm?: () => void;
    beforeCancel?: () => void;
    beforeConfirm?: () => void;
    renderIfNotActive?: boolean;
    disableNative?: boolean;
  }

  interface NavigationPromptState {
    action?: H.Action;
    nextLocation?: H.Location;
    isActive: boolean;
    unblock: () => void;
  }

  export class NavigationPrompt extends React.Component<NavigationPromptProps, NavigationPromptState> {
    _prevUserAction: string;
    _isMounted: boolean;

    block(nextLocation: H.Location, action: H.Action): boolean;
    navigateToNextLocation(cb: () => void): void;
    onCancel(): void;
    onConfirm(): void;
    onBeforeUnload(e: any): string
    when(nextLocation?: H.Location): boolean;
   }
}

// This is for the withRouter HOC being used as the default export.
export default function NavigationPrompt(): React.Component<Omit<NavigationPromptProps, keyof RouteComponentProps<any>>>;
