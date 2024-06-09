import * as ToolsModules from '@/tools';

const useToolsModules = () => {
  console.log('ToolsModules',ToolsModules['Base64Coding'])
  const ToolsModulesList = Object.values(ToolsModules);
  return ToolsModulesList;
};

export default useToolsModules;
