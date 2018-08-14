import {get, setProperties} from '@ember/object';

export function initialize(appInstance) {
  const modalsManager = appInstance.lookup('service:modals-manager');
  setProperties(get(modalsManager, 'defaultOptions'), {
    size: null,
    backdropTransitionDuration: 150,
    renderInPlace: true,
    transitionDuration: 300,
    confirmIsActive: false,
    confirmButtonSize: 'md',
    confirmButtonType: 'primary',
    confirmIconActive: '',
    confirmIconInactive: '',
    declineIsActive: false,
    declineButtonSize: 'md',
    declineButtonType: 'secondary',
    declineIconActive: '',
    declineIconInactive: '',
  });
}

export default {
  name: 'bootstrap-modals-manager',
  initialize
};
