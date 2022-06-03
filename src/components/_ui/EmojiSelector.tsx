export interface Emoji {
  emoji: string;
  toolTip: string;
}

export const GrowthStageEmoji = (stage: string) => {
  const growthStageEmoji: Emoji = { emoji: '', toolTip: '' };
  // Growth stage emoji logic
  switch (stage) {
    case 'Evergreen':
      growthStageEmoji.emoji = '🌳';
      growthStageEmoji.toolTip =
        'Evergreens are mature ideas. Little change is expected, except for occassional edits.';

      break;
    case 'Budding':
      growthStageEmoji.emoji = '🌿';
      growthStageEmoji.toolTip =
        'Buddings are ideas that still require a little more time to grow and mature.';

      break;
    default:
      // seedling
      growthStageEmoji.emoji = '🌱';
      growthStageEmoji.toolTip =
        'Seedlings are ideas I have just created. They are raw, unpolished and require time to develop.';
  }
  return growthStageEmoji;
};

export const ReadingStatusEmoji = (status: string) => {
  let readingStatusEmoji: string;
  // Reading status emoji logic
  switch (status) {
    case 'In Progress':
      readingStatusEmoji = '📖';
      break;
    default:
      // completed
      readingStatusEmoji = '📕';
  }
  return readingStatusEmoji;
};
