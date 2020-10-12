/**
 * Babel
 * Responsável por converter (transpilar) o código  do React  para um código que o browser entenda
 * Presets: São configurações utilizadas pelo babel para realizar alguma determinada ação
 * - @babel/preset-env: Módulo especial que compilará o código compatível com o que o navegador suporta
 * - @babel/preset-react: Processa o JSX e converte de forma que o navegador possa entender ele
 */

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
