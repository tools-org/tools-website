import * as ToolsModules from '@/tools';

const useToolsModules = () => {
  const ToolsModulesList = Object.values(ToolsModules);
  console.log(ToolsModulesList);
  return ToolsModulesList;
};

export default useToolsModules;
