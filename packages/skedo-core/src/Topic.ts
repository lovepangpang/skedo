export enum Topic {
  Updated,
  Moved,
  Loaded,
  SelectionMoving,
  SelectionMoved,
  Resizing,
  Resized,
  DragEnd,
  ResizeModelUpdated,
  StartMove,
  Moving,
  EndMove,
  PropertyEditorUpdated,
  PropertyChanged,
  EditMode,

  // New Event System
  NewNodeAdded,
  NodeMoved,
  NodeChildrenChanged,
  SelectionChanged,
  AssistLinesChanged,
  MouseUpEventPass,
  MouseMoveEventPass,
  NodePropUpdated
}