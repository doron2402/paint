if (!global.__BASE && !module.parent){
  global.__BASE = __dirname;
}
require('babel/register');
require(__BASE + '/src/app');
