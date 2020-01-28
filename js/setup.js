'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomData = function (data) {
  return data[Math.floor(Math.random() * data.length)];
};

var wizards = [
  {
    name: getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_LAST_NAME),
    coatColor: getRandomData(WIZARD_COAT_COLOR),
    eyesColor: getRandomData(WIZARD_EYES_COLOR)
  },
  {
    name: getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_LAST_NAME),
    coatColor: getRandomData(WIZARD_COAT_COLOR),
    eyesColor: getRandomData(WIZARD_EYES_COLOR)
  },
  {
    name: getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_LAST_NAME),
    coatColor: getRandomData(WIZARD_COAT_COLOR),
    eyesColor: getRandomData(WIZARD_EYES_COLOR)
  },
  {
    name: getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_LAST_NAME),
    coatColor: getRandomData(WIZARD_COAT_COLOR),
    eyesColor: getRandomData(WIZARD_EYES_COLOR)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fillBlock = function (wizardsData) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsData.length; i++) {
    fragment.appendChild(renderWizard(wizardsData[i]));
  }
  similarListElement.appendChild(fragment);
};

fillBlock(wizards);

document.querySelector('.setup-similar').classList.remove('hidden');
