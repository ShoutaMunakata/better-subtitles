# Better Subtitles (Chrome Extension)

## Overview

The **Better Subtitles** Chrome extension enhances the subtitle experience on YouTube by allowing users to customize subtitle settings. It provides options to adjust font size, color, and background for improved accessibility and viewing comfort. Additionally, it integrates with the Google Translate API to offer real-time subtitle translation into the user's preferred language.

## Features

- **Custom Font Size**: Adjust the font size of YouTube subtitles for better readability.
- **Custom Font Color**: Choose the font color to suit your viewing preferences.
- **Custom Background Color**: Customize the background color for improved contrast and legibility.
- **Real-Time Subtitle Translation**: Translate YouTube subtitles in real time using the Google Translate API.
- **Persistent Settings**: All customizations are saved and synced across devices using Chrome’s storage API.

## Installation

1. Clone or download the repository to your local machine:
   ```bash
   git clone https://github.com/ShoutaMunakata/better-subtitles.git
   ```
2. Open **Chrome** and go to `chrome://extensions/`.
3. Enable **Developer Mode** in the top right corner.
4. Click on **Load unpacked** and select the project folder.
5. The extension will now be available in the extensions toolbar.

## How to Use

1. Navigate to a YouTube video.
2. Open the extension by clicking on the Chrome extension icon.
3. Customize the font size, color, and background of the subtitles using the provided controls.
4. (Optional) Select your preferred language for real-time subtitle translation.
5. Click **Apply** to update the subtitles on the current video.

## Screenshots

| Feature          | Screenshot |
|------------------|------------|
| Customization UI | ![Popup UI](path-to-screenshot) |
| Customized Subtitles | ![Custom Subtitles](path-to-screenshot) |

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Chrome `storage.sync` API, Google Translate API
- **Chrome Extension Development**: Content Scripts, Popup Interface

## Future Enhancements

- **Cloud Sync**: Add cloud services for enhanced syncing across platforms.
- **Additional Languages**: Support more languages and dialects for real-time subtitle translation.
- **Live Preview**: Offer a live preview of subtitle styles within the popup interface.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, feel free to reach out at annshrune@gmail.com or [GitHub](https://github.com/ShoutaMunakata).
