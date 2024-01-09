import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import ThemeBlock from '../../ThemeBlock';
import {
  AISparkle,
  Action,
  Add,
  AddBlock,
  AddUserSmileyFace,
  AlertCircle,
  AlertTriangle,
  Alphabet,
  ArrowDown,
  ArrowDownSplitTwo,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowsAdjustingFrameSquare,
  Backfill,
  BackfillV2,
  Batch,
  BatchPipeline,
  Binary,
  BlockBlank,
  BlockCubePolygon,
  BlockGeneric,
  BlocksSeparated,
  BlocksStacked,
  Branch,
  BranchAlt,
  CalendarDate,
  CalendarRounded,
  Callback,
  CaretDown,
  CaretRight,
  Categories,
  Category,
  Chart,
  Charts,
  Chat,
  Check,
  ChevronDown,
  ChevronDownV2,
  ChevronUpV2,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleWithArrowUp,
  Clone,
  Close,
  Code,
  Column,
  Conditional,
  Copy,
  CubesThreeSeparated,
  CubeWithArrowDown,
  Cursor,
  Database,
  DBT,
  DataIntegrationPipeline,
  DiamondDetached,
  DiamondGem,
  DiamondShared,
  DocumentIcon,
  Edit,
  Ellipsis,
  Email,
  Expand,
  ExpandOpenUpRight,
  File as FileIcon,
  FileFill as FilledFileIcon,
  Filter,
  Folder,
  FolderV2,
  FolderV2Filled,
  FrameBoxSelection,
  GitHubIcon,
  Graph,
  GraphWithNodes,
  Group,
  HexagonAll,
  IDLetters,
  Info,
  Input,
  Insights,
  Integration,
  Interactions,
  LayoutSplit,
  LayoutStacked,
  Lightning,
  LightningOff,
  List,
  Locked,
  Logs,
  MageMLogo,
  MapPin,
  Menu,
  MicrosoftIcon,
  Monitor,
  MultiShare,
  MusicNotes,
  NavDashboard,
  NavData,
  NavGraph,
  NavReport,
  NavTree,
  NewBlock,
  NumberHash,
  NumberWithDecimalHash,
  Once,
  Open,
  PanelCollapseLeft,
  PanelCollapseRight,
  PaginateArrowLeft,
  PaginateArrowRight,
  ParentEmpty,
  ParentLinked,
  Pause,
  PauseV2,
  Phone,
  PipeIcon,
  Pipeline,
  PipelineV2,
  PipelineV3,
  PlayButton,
  PlayButtonFilled,
  PlugAPI,
  PowerOnOffButton,
  PowerUps,
  PreviewHidden,
  PreviewOpen,
  Recenter,
  Refresh,
  RoundedSquare,
  Save,
  Schedule,
  ScheduleClockWithBorderDots,
  Search,
  Secrets,
  Sensor,
  Settings,
  SettingsWithKnobs,
  Slack,
  Smiley,
  SortAscending,
  SortDescending,
  Stack,
  Streaming,
  Subitem,
  Sun,
  Switch,
  Table,
  TemplateShapes,
  Terminal,
  TodoList,
  Trash,
  Tree,
  Union,
  Upload,
  UserSmileyFace,
  Variables,
  VisibleEye,
  WeekDots,
  WorkspacesIcon,
  WorkspacesUsersIcon,
  ZoomIn,
  ZoomOut,
  BatchSquaresStacked,
  FolderOutline,
  BlocksCombined,
  TreeWithArrowsDown,
  TreeWithArrowsUp,
} from '@oracle/icons';
import EmptyCharts from '@oracle/icons/custom/EmptyCharts';
import Mage8Bit from '@oracle/icons/custom/Mage8Bit';

const ICONS = [
  AISparkle,
  Action,
  Add,
  AddBlock,
  AddUserSmileyFace,
  AlertCircle,
  AlertTriangle,
  Alphabet,
  ArrowDown,
  ArrowDownSplitTwo,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowsAdjustingFrameSquare,
  Backfill,
  BackfillV2,
  Batch,
  BatchPipeline,
  Binary,
  BlockBlank,
  BlockCubePolygon,
  BlockGeneric,
  BlocksSeparated,
  BlocksStacked,
  Branch,
  BranchAlt,
  CalendarDate,
  CalendarRounded,
  Callback,
  CaretDown,
  CaretRight,
  Categories,
  Category,
  Chart,
  Charts,
  Chat,
  Check,
  ChevronDown,
  ChevronDownV2,
  ChevronUpV2,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleWithArrowUp,
  Clone,
  Close,
  Code,
  Column,
  Conditional,
  Copy,
  CubesThreeSeparated,
  CubeWithArrowDown,
  Cursor,
  Database,
  DBT,
  DataIntegrationPipeline,
  DiamondDetached,
  DiamondGem,
  DiamondShared,
  DocumentIcon,
  Edit,
  Ellipsis,
  Email,
  EmptyCharts,
  Expand,
  ExpandOpenUpRight,
  FileIcon,
  FilledFileIcon,
  Filter,
  Folder,
  FolderV2,
  FolderV2Filled,
  FrameBoxSelection,
  GitHubIcon,
  Graph,
  GraphWithNodes,
  Group,
  HexagonAll,
  IDLetters,
  Info,
  Input,
  Insights,
  Integration,
  Interactions,
  LayoutSplit,
  LayoutStacked,
  Lightning,
  LightningOff,
  List,
  Locked,
  Logs,
  Mage8Bit,
  MageMLogo,
  MapPin,
  Menu,
  MicrosoftIcon,
  Monitor,
  MultiShare,
  MusicNotes,
  NavDashboard,
  NavData,
  NavGraph,
  NavReport,
  NavTree,
  NewBlock,
  NumberHash,
  NumberWithDecimalHash,
  Once,
  Open,
  PanelCollapseLeft,
  PanelCollapseRight,
  PaginateArrowLeft,
  PaginateArrowRight,
  ParentEmpty,
  ParentLinked,
  Pause,
  PauseV2,
  Phone,
  PipeIcon,
  Pipeline,
  PipelineV2,
  PipelineV3,
  PlayButton,
  PlayButtonFilled,
  PlugAPI,
  PowerOnOffButton,
  PowerUps,
  PreviewHidden,
  PreviewOpen,
  Recenter,
  Refresh,
  RoundedSquare,
  Save,
  Schedule,
  ScheduleClockWithBorderDots,
  Search,
  Secrets,
  Sensor,
  Settings,
  SettingsWithKnobs,
  Slack,
  Smiley,
  SortAscending,
  SortDescending,
  Stack,
  Streaming,
  Subitem,
  Sun,
  Switch,
  Table,
  TemplateShapes,
  Terminal,
  TodoList,
  Trash,
  Tree,
  Union,
  Upload,
  UserSmileyFace,
  Variables,
  VisibleEye,
  WeekDots,
  WorkspacesIcon,
  WorkspacesUsersIcon,
  ZoomIn,
  ZoomOut,
  BatchSquaresStacked,
  FolderOutline,
  BlocksCombined,
  TreeWithArrowsDown,
  TreeWithArrowsUp,
];

const Icons = () => (
  <>
    {ICONS.map(Icon => (
      <ThemeBlock
        // @ts-ignore
        key={Icon.displayName}
        reducedPadding
        sideBySide
        // @ts-ignore
        title={Icon.displayName}
      >
        <Icon />
      </ThemeBlock>
    ))}
  </>
);

export default {
  component: Icons,
  title: 'Oracle/Icons',
} as Meta;

const Template: StoryFn = () => <Icons />;

export const Main = Template.bind({});
