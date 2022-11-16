import ZegoUIKit, {
  ZegoUIKitPluginType,
  ZegoUIKitInvitationService,
} from '@zegocloud/zego-uikit-rn';
import { zloginfo } from '../../utils/logger';

const _appInfo = {};
const _localUser = {};
const _install = (plugins) => {
  ZegoUIKit.installPlugins(plugins);
  Object.values(ZegoUIKitPluginType).forEach((pluginType) => {
    const plugin = ZegoUIKit.getPlugin(pluginType);
    plugin &&
      ZegoUIKit.getPlugin(pluginType)
        .getVersion()
        .then((pluginVersion) => {
          zloginfo(
            `[Plugins] install success, pluginType: ${pluginType}, version: ${pluginVersion}`
          );
        });
  });
};

const ZegoPrebuiltPlugins = {
  init: (appID, appSign, userID, userName, plugins) => {
    _install(plugins);
    ZegoUIKitInvitationService.init(appID, appSign);
    _appInfo.appID = appID;
    _appInfo.appSign = appSign;
    _localUser.userID = userID;
    _localUser.userName = userName;
    return ZegoUIKitInvitationService.login(userID, userName).then(() => {});
  },
  uninit: () => {
    ZegoUIKitInvitationService.uninit();
    return ZegoUIKitInvitationService.logout();
  },
  getLocalUser: () => {
    return _localUser;
  },
  getAppInfo: () => {
    return _appInfo;
  },
};

export default ZegoPrebuiltPlugins;
