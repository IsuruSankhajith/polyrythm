
# Polyrhythm Animation with Sound

A dynamic web application that visualizes polyrhythms using animated balls moving along circular tracks. Each ball follows a unique rhythm and triggers sound at specific points, creating an engaging audio-visual experience.

## Features

- **Interactive Animation**: Balls move along tracks with unique speeds, simulating polyrhythmic patterns.
- **Sound Integration**: Each ball triggers a sound using the Web Audio API, enhancing the rhythmic experience.
- **Customizable Parameters**: Easily modify the number of tracks, ball speeds, radii, and sound frequencies.
- **Responsive Design**: The canvas automatically adjusts to fit the specified dimensions.

## Demo

You can view the live demo of the project [here](#) (replace `#` with your live demo link).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Polyrhythm.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Polyrhythm
   ```
3. Open the `index.html` file in a browser to view the animation.

## Usage

- Modify the `size`, `trackStep`, `ballSpeed`, and `soundFrequencies` in the JavaScript code for custom behavior.
- Edit the `Ball` and `Track` classes to add new functionality or visual effects.
- Use your browser’s developer tools to experiment with real-time changes.

## Project Structure

```
Polyrhythm/
├── index.html       # Main HTML file
├── sound.js         # Sound generation logic
├── track.js         # Track class definition
├── ball.js          # Ball class definition
└── README.md        # Project documentation
```

## Technologies Used

- **HTML5 Canvas**: For rendering animations.
- **JavaScript**: For managing the animation loop, object interactions, and sound generation.
- **Web Audio API**: For dynamic sound synthesis.

## Customization

### Changing Track and Ball Parameters
- Update the `trackMinRadius`, `trackStep`, and `N` variables in `index.html` to adjust the visual layout.
- Modify `ballSpeed` and `ballRadius` to control the ball movement and appearance.

### Adding More Sounds
- Extend the `soundFrequencies` array with new frequencies.
- Link these frequencies to balls in the `Ball` class.

## Contributing

Contributions are welcome! If you'd like to improve this project, please:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the beauty of polyrhythms and generative art.
- Built with love for creative coding.

---
