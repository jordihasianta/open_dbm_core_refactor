import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const isMacOS = ExecutionEnvironment.canUseDOM
  ? navigator.platform.startsWith('Mac')
  : false;
const isWindows = ExecutionEnvironment.canUseDOM
  ? navigator.platform.startsWith('Win')
  : false;

const syntax = [
  {label: 'Function Component', value: 'functional'},
  {label: 'Class Component', value: 'classical'},
];
const defaultSyntax = 'functional';

const packageManagers = [
  {label: 'npm', value: 'npm'},
  {label: 'Yarn', value: 'yarn'},
];
const defaultPackageManager = 'npm';

const androidLanguages = [
  {label: 'Java', value: 'java'},
  {label: 'Kotlin', value: 'kotlin'},
];
const defaultAndroidLanguage = 'java';

const javaScriptSpecLanguages = [
  {label: 'Flow', value: 'flow'},
  {label: 'TypeScript', value: 'typescript'},
];
const defaultJavaScriptSpecLanguages = 'flow';

const guides = [{label: 'Install Dependencies', value: 'dep-install'}];
const defaultGuide = 'dep-install';

const guidesDocker = [{label: 'Installing Docker Images', value: 'docker-install'}];
const defaultGuideDocker = 'docker-install';

const platforms = [
  {label: 'Android', value: 'android'},
  {label: 'iOS', value: 'ios'},
];
const defaultPlatform = isMacOS ? 'ios' : 'android';

const oses = [
  {label: 'macOS', value: 'macos'},
  {label: 'Linux', value: 'linux'},
  {label: 'Windows', value: 'windows'},
];
const defaultOs = isMacOS ? 'macos' : isWindows ? 'windows' : 'linux';

const getDevNotesTabs = (tabs = ['android', 'ios', 'web', 'windows']) =>
  [
    tabs.includes('android') ? {label: 'Android', value: 'android'} : undefined,
    tabs.includes('ios') ? {label: 'iOS', value: 'ios'} : undefined,
    tabs.includes('web') ? {label: 'Web', value: 'web'} : undefined,
    tabs.includes('windows') ? {label: 'Windows', value: 'windows'} : undefined,
  ].filter(Boolean);

const getLibraryNotesTabs = (
  tabs = ['researchers', 'data_scientist', 'engineer']
) =>
  [
    tabs.includes('researchers')
      ? {label: 'Researchers', value: 'researchers'}
      : undefined,
    tabs.includes('data_scientist')
      ? {label: 'Data Scientist', value: 'data_scientist'}
      : undefined,
    tabs.includes('engineer')
      ? {label: 'Python Engineer', value: 'engineer'}
      : undefined,
  ].filter(Boolean);

export default {
  defaultGuide,
  defaultGuideDocker,
  defaultOs,
  defaultPackageManager,
  defaultPlatform,
  defaultSyntax,
  defaultAndroidLanguage,
  javaScriptSpecLanguages,
  defaultJavaScriptSpecLanguages,
  getDevNotesTabs,
  getLibraryNotesTabs,
  guides,
  guidesDocker,
  oses,
  packageManagers,
  platforms,
  syntax,
  androidLanguages,
};
