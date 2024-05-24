import * as ToolsModules from '@/tools';

const useToolsModules = () => {
  const ToolsModulesList = Object.values(ToolsModules);
  return ToolsModulesList;
};

export default useToolsModules;
