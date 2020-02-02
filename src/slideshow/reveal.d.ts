export interface RevealStatic {
  /**
   * The reveal.js version
   */
  VERSION: string;

  /**
   * Starts up the presentation if the client is capable.
   */
  initialize: (config?: RevealOptions) => void;
  /**
   * Applies the configuration settings from the config
   * object. May be called multiple times.
   */
  configure: (diff: RevealOptions) => void;

  /**
   * Steps from the current point in the presentation to the
   * slide which matches the specified horizontal and vertical
   * indices.
   *
   * @param {number} [h=indexh] Horizontal index of the target slide
   * @param {number} [v=indexv] Vertical index of the target slide
   * @param {number} [f] Index of a fragment within the
   * target slide to activate
   * @param {number} [o] Origin for use in multimaster environments
   */
  slide(indexh: number, indexv?: number, f?: number, o?: number): void;
  /**
   * Navigation methods
   */
  left(): void;
  /**
   * Navigation methods
   */
  right(): void;
  /**
   * Navigation methods
   */
  up(): void;
  /**
   * Navigation methods
   */
  down(): void;
  /**
   * Navigates backwards, prioritized in the following order:
   * 1) Previous fragment
   * 2) Previous vertical slide
   * 3) Previous horizontal slide
   */
  prev(): void;
  /**
   * The reverse of #navigatePrev().
   */
  next(): void;

  /**
   * Navigate to the specified slide fragment.
   *
   * @param {?number} index The index of the fragment that
   * should be shown, -1 means all are invisible
   * @param {number} offset Integer offset to apply to the
   * fragment index
   *
   * @return {boolean} true if a change was made in any
   * fragments visibility as part of this call
   */
  navigateFragment(index: number | null, offset: number): boolean;
  /**
   * Navigate to the previous slide fragment.
   *
   * @return {boolean} true if there was a previous fragment,
   * false otherwise
   */
  prevFragment(): boolean;
  /**
   * Navigate to the next slide fragment.
   *
   * @return {boolean} true if there was a next fragment,
   * false otherwise
   */
  nextFragment(): boolean;

  /**
   * Randomize the order of slides
   */
  shuffle(): void;

  /**
   * Toggles the overview mode on/off
   * @param override
   */
  toggleOverview(override?: boolean): void;
  /**
   * Toggles the "black screen" mode on/off
   * @param override
   */
  togglePause(override?: boolean): void;
  /**
   * Toggles the auto slide mode on/off
   * @param override
   */
  toggleAutoSlide(override?: boolean): void;
  /**
   * Open or close help overlay window.
   *
   * @param {Boolean} [override] Flag which overrides the
   * toggle logic and forcibly sets the desired state. True means
   * help is open, false means it's closed.
   */
  toggleHelp(override?: boolean): void;

  /**
   * Returns the previous slide element, may be null
   */
  getPreviousSlide(): Element | null;
  /**
   * Returns the current slide element
   */
  getCurrentSlide(): Element;

  /**
   * Returns the indices of the current, or specified, slide
   * @param slide
   */
  getIndices(slide?: Element): { h: number; v: number };
  /**
   * Presentation progress on range of 0-1
   */
  getProgress(): number;
  /**
   * Returns the total number of slides
   */
  getTotalSlides(): number;

  /**
   * Returns the speaker notes string for a slide, or null
   * @param slide
   */
  getSlideNotes(slide?: Element): string | null;

  /**
   * Forward event binding to the reveal DOM element
   * @param type
   * @param listener
   * @param useCapture
   */
  addEventListener(type: string, listener: (event: any) => void, useCapture?: boolean): void;
  /**
   * Forward event binding to the reveal DOM element
   * @param type
   * @param listener
   * @param useCapture
   */
  removeEventListener(type: string, listener: (event: any) => void, useCapture?: boolean): void;

  /**
   * Returns true if we're currently on the first slide
   */
  isFirstSlide(): boolean;
  /**
   * Returns true if we're currently on the last slide
   */
  isLastSlide(): boolean;
  /**
   * Returns true if we're on the last slide in the current vertical stack
   */
  isLastVerticalSlide(): boolean;
  /**
   * Checks if we are currently in the paused mode.
   */
  isPaused(): boolean;
  /**
   * Checks if the overview is currently active.
   *
   * @return {Boolean} true if the overview is active,
   * false otherwise
   */
  isOverview(): boolean;
  /**
   * Checks if the auto slide mode is currently on.
   */
  isAutoSliding(): boolean;

  /**
   * Forces an update in slide layout
   */
  layout(): void;
  /**
   * Adds all internal event listeners (such as keyboard)
   */
  addEventListeners(): void;
  /**
   * Removes all internal event listeners (such as keyboard)
   */
  removeEventListeners(): void;
  /**
   * Returns the slide element at the specified index
   * @param x
   * @param y
   */
  getSlide(x: number, y?: number): Element;
  /**
   * Returns the current scale of the presentation content
   */
  getScale(): number;
  /**
   * Returns the current configuration object
   */
  getConfig(): RevealOptions;
  /**
   * Helper method, retrieves query string as a key/value hash
   */
  getQueryHash(): Record<string, any>;
  /**
   * Facility for persisting and restoring the presentation state
   * @param state
   */
  setState(state: any): void;
  /**
   * Facility for persisting and restoring the presentation state
   */
  getState(): any;

  /**
   * update slides after dynamic changes
   */
  sync(): void;
  /**
   * Updates reveal.js to keep in sync with new slide attributes. For
   * example, if you add a new `data-background-image` you can call
   * this to have reveal.js render the new background image.
   *
   * Similar to #sync() but more efficient when you only need to
   * refresh a specific slide.
   *
   * @param {HTMLElement} slide
   */
  syncSlide(slide: HTMLElement): void;
  /**
   * Formats the fragments on the given slide so that they have
   * valid indices. Call this if fragments are changed in the DOM
   * after reveal.js has already initialized.
   *
   * @param {HTMLElement} slide
   * @return {Array} a list of the HTML fragments that were synced
   */
  syncFragments(slide: HTMLElement): HTMLElement[];
  /**
   * Checks if reveal.js has been loaded and is ready for use
   */
  isReady(): boolean;

  /**
   * @alias slide
   * @deprecated
   */
  navigateTo(indexh: number, indexv?: number, f?: number, o?: number): void;
  /**
   * @alias left
   * @deprecated
   */
  navigateLeft(): void;
  /**
   * @alias right
   * @deprecated
   */
  navigateRight(): void;
  /**
   * @alias up
   * @deprecated
   */
  navigateUp(): void;
  /**
   * @alias down
   * @deprecated
   */
  navigateDown(): void;
  /**
   * @alias prev
   * @deprecated
   */
  navigatePrev(): void;
  /**
   * @alias next
   * @deprecated
   */
  navigateNext(): void;

  /**
   * Determine what available routes there are for navigation.
   *
   * @return {{left: boolean, right: boolean, up: boolean, down: boolean}}
   */
  availableRoutes(): { left: boolean; right: boolean; up: boolean; down: boolean };
  /**
   * Returns an object describing the available fragment
   * directions.
   *
   * @return {{prev: boolean, next: boolean}}
   */
  availableFragments(): { prev: boolean; next: boolean };
  /**
   * Called when the given slide is within the configured view
   * distance. Shows the slide element and loads any content
   * that is set to load lazily (data-src).
   *
   * @param {HTMLElement} slide Slide to show
   */
  loadSlide(slide: HTMLElement): void;
  /**
   * Unloads and hides the given slide. This is called when the
   * slide is moved outside of the configured view distance.
   *
   * @param {HTMLElement} slide
   */
  unloadSlide(): HTMLElement;
  /**
   * Returns the number of past slides. This can be used as a global
   * flattened index for slides.
   *
   * @return {number} Past slide count
   */
  getSlidePastCount(): number;
  /**
   * Returns an array of objects where each object represents the
   * attributes on its respective slide.
   */
  getSlidesAttributes(): Record<string, any>[];
  /**
   * Retrieves all slides in this presentation.
   */
  getSlides(): Element[];
  /**
   * Returns the background element for the given slide.
   * All slides, even the ones with no background properties
   * defined, have a background element so as long as the
   * index is valid an element will be returned.
   *
   * @param {mixed} x Horizontal background index OR a slide
   * HTML element
   * @param {number} y Vertical background index
   * @return {(HTMLElement[]|*)}
   */
  getSlideBackground(x: number | Element, y: number): HTMLElement[] | undefined;
  /**
   * Returns the top-level DOM element
   */
  getRevealElement(): Element | Element[];
  /**
   * Returns a hash with all registered plugins
   */
  getPlugins(): Record<string, any>;
  /**
   * Add a custom key binding with optional description to
   * be added to the help screen.
   */
  addKeyBinding(
    binding:
      | string
      | {
          keyCode: string;
          key?: string;
          description?: string;
        },
    callback: () => void
  ): void;
  /**
   * Removes the specified custom key binding.
   */
  removeKeyBinding(keyCode: string): void;
  /**
   * Registers a new plugin with this reveal.js instance.
   *
   * reveal.js waits for all regisered plugins to initialize
   * before considering itself ready, as long as the plugin
   * is registered before calling `Reveal.initialize()`.
   */
  registerPlugin(id: string, plugin: any): any;
  /**
   * Checks if a specific plugin has been registered.
   *
   * @param {String} id Unique plugin identifier
   */
  hasPlugin(id: string): boolean;
  /**
   * Returns the specific plugin instance, if a plugin
   * with the given ID has been registered.
   *
   * @param {String} id Unique plugin identifier
   */
  getPlugin(id: string): any;
  /**
   * Programmatically triggers a keyboard event
   */
  triggerKey(keyCode: string): void;
  /**
   * Registers a new shortcut to include in the help overlay
   */
  registerKeyboardShortcut(key: string, value: any): void;
}

interface RevealOptions {
  /**
   * Display presentation control arrows
   * @default true
   */
  controls?: boolean;
  /**
   * Help the user learn the controls by providing hints, for example by
   * bouncing the down arrow when they first encounter a vertical slide
   * @default true
   */
  controlsTutorial?: boolean;
  /**
   * Determines where controls appear, "edges" or "bottom-right"
   * @default "bottom-right"
   */
  controlsLayout?: "edges" | "bottom-right";
  /**
   * Visibility rule for backwards navigation arrows; "faded", "hidden"
   * or "visible"
   * @default "faded"
   */
  controlsBackArrows?: "faded" | "hidden" | "visible";
  /**
   * Display a presentation progress bar
   * @default true
   */
  progress?: boolean;
  /**
   * Display the page number of the current slide
   * - true:    Show slide number
   * - false:   Hide slide number
   *
   * Can optionally be set as a string that specifies the number formatting:
   * - "h.v":  Horizontal . vertical slide number (default)
   * - "h/v":  Horizontal / vertical slide number
   * - "c":  Flattened slide number
   * - "c/t":  Flattened slide number / total slides
   *
   * Alternatively, you can provide a function that returns the slide
   * number for the current slide. The function needs to return an array
   * with one string [slideNumber] or three strings [n1,delimiter,n2].
   * See #formatSlideNumber().
   * <https://github.com/hakimel/reveal.js/#slide-number>
   *
   * @default false
   */
  slideNumber?: boolean | string | (() => [string] | [string, string, string]);
  /**
   * Can be used to limit the contexts in which the slide number appears
   * - "all":      Always show the slide number
   * - "print":    Only when printing to PDF
   * - "speaker":  Only in the speaker view
   *
   * @default "all"
   */
  showSlideNumber?: "all" | "print" | "speaker";

  /**
   * Push each slide change to the browser history.  Implies `hash: true`
   * @default false
   */
  history?: boolean;

  /**
   * Enable keyboard shortcuts for navigation
   * <https://github.com/hakimel/reveal.js/#keyboard-bindings>
   *
   * @default true
   */
  keyboard?: boolean | Record<string | number, string | null | (() => void)>;
  /**
   * Optional function that blocks keyboard events when retuning false
   * @default null
   */
  keyboardCondition?: (() => boolean) | null;
  /**
   * Enable the slide overview mode
   * @default true
   */
  overview?: boolean;
  /**
   * Vertical centering of slides
   * @default true
   */
  center?: boolean;
  /**
   * Enables touch navigation on devices with touch input
   * @default true
   */
  touch?: boolean;
  /**
   * Loop the presentation
   * @default true
   */
  loop?: boolean;
  /**
   * Change the presentation direction to be RTL
   * @default true
   */
  rtl?: boolean;
  /**
   * Randomizes the order of slides each time the presentation loads
   * @default false
   */
  shuffle?: boolean;
  /**
   * Turns fragments on and off globally
   * @default true
   */
  fragments?: boolean;
  /**
   * Flags whether to include the current fragment in the URL,
   * so that reloading brings you to the same fragment position
   * @default false
   */
  fragmentInURL?: boolean;
  /**
   * Flags if the presentation is running in an embedded mode,
   * i.e. contained within a limited portion of the screen
   * @default false
   */
  embedded?: boolean;
  /**
   * Flags if we should show a help overlay when the question-mark
   * key is pressed
   * @default true
   */
  help?: boolean;
  /**
   * Flags if speaker notes should be visible to all viewers
   * @default false
   */
  showNotes?: boolean;
  /**
   * Controls automatic progression to the next slide
   * - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
   *           is present on the current slide or fragment
   * - 1+:     All slides will progress automatically at the given interval
   * - false:  No auto-sliding, even if data-autoslide is present
   *
   * @default 0
   */
  autoSlide?: number | false;
  /**
   * Stop auto-sliding after user input
   * @default true
   */
  autoSlideStoppable?: boolean;
  /**
   * Use this method for navigation when auto-sliding (defaults to navigateNext)
   * @default navigateNext
   */
  autoSlideMethod?: any;
  /**
   * Enable slide navigation via mouse wheel
   * @default false
   */
  mouseWheel?: boolean;
  /**
   * Hides the address bar on mobile devices
   * @default true
   */
  hideAddressBar?: boolean;
  /**
   * Opens links in an iframe preview overlay
   * Add `data-preview-link` and `data-preview-link="false"` to customise each link
   * individually
   * @default false
   */
  previewLinks?: boolean;
  /**
   * Transition style
   * @default "slide"
   */
  transition?: "none" | "fade" | "slide" | "convex" | "concave" | "zoom";
  /**
   * Transition speed
   * @default "default"
   */
  transitionSpeed?: "default" | "fast" | "slow";
  /**
   * Transition style for full page slide backgrounds
   * @default "fade"
   */
  backgroundTransition?: "none" | "fade" | "slide" | "convex" | "concave" | "zoom";
  /**
   * Number of slides away from the current that are visible
   * @default 3
   */
  viewDistance?: number;

  /**
   * Parallax background image
   * CSS syntax, e.g. "a.jpg"
   * https://github.com/hakimel/reveal.js/#parallax-background
   * @default ""
   */
  parallaxBackgroundImage?: string;

  /**
   * Parallax background size
   * CSS syntax, e.g. "3000px 2000px"
   * @default ""
   */
  parallaxBackgroundSize?: string;

  /**
   * Number of pixels to move the parallax background per slide
   * - Calculated automatically unless specified
   * - Set to 0 to disable movement along an axis
   * @default null
   */
  parallaxBackgroundHorizontal?: number | null;
  /**
   * Number of pixels to move the parallax background per slide
   * - Calculated automatically unless specified
   * - Set to 0 to disable movement along an axis
   * @default null
   */
  parallaxBackgroundVertical?: number | null;
  /**
   * Parallax background repeat
   * @default ""
   */
  parallaxBackgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat" | "initial" | "inherit";
  /**
   * Parallax background position
   * CSS syntax, e.g. "top left"
   * @default ""
   */
  parallaxBackgroundPosition?: string;
  /**
   * Apply a 3D roll to links on hover
   * @default false
   */
  rollingLinks?: boolean;
  theme?: string;

  /**
   * The "normal" size of the presentation, aspect ratio will be preserved
   * when the presentation is scaled to fit different resolutions
   * <https://github.com/hakimel/reveal.js/#presentation-size>
   *
   * @default 960
   */
  width?: number | string;
  /**
   * The "normal" size of the presentation, aspect ratio will be preserved
   * when the presentation is scaled to fit different resolutions
   * <https://github.com/hakimel/reveal.js/#presentation-size>
   *
   * @default 700
   */
  height?: number | string;
  /**
   * Factor of the display size that should remain empty around the content
   * @default 0.04
   */
  margin?: number | string;
  /**
   * Bounds for smallest/largest possible scale to apply to content
   * @default 0.2
   */
  minScale?: number | string;
  /**
   * Bounds for smallest/largest possible scale to apply to content
   * @default 2.0
   */
  maxScale?: number | string;

  /**
   * Script dependencies to load
   * https://github.com/hakimel/reveal.js/#dependencies>
   */
  dependencies?: RevealDependency[];

  /**
   * Exposes the reveal.js API through window.postMessage
   * @default true
   */
  postMessage?: boolean;

  /**
   * Dispatches all reveal.js events to the parent window through postMessage
   * @default false
   */
  postMessageEvents?: boolean;

  /**
   * https://github.com/hakimel/reveal.js/#multiplexing
   */
  multiplex?: MultiplexConfig;

  /**
   * https://github.com/hakimel/reveal.js/#mathjax
   */
  math?: MathConfig;

  /**
   * Use 1 based indexing for # links to match slide number (default is zero based)
   * @default false
   */
  hashOneBasedIndex?: boolean;
  /**
   * Add the current slide number to the URL hash so that reloading the
   * page/copying the URL will return you to the same slide
   * @default false
   */
  hash?: boolean;

  /**
   * Disables the default reveal.js slide layout so that you can use
   * custom CSS layout
   * @default false
   */
  disableLayout?: boolean;

  /**
   * Changes the behavior of our navigation directions.
   *
   * "default"
   * Left/right arrow keys step between horizontal slides, up/down
   * arrow keys step between vertical slides. Space key steps through
   * all slides (both horizontal and vertical).
   *
   * "linear"
   * Removes the up/down arrows. Left/right arrows step through all
   * slides (both horizontal and vertical).
   *
   * "grid"
   * When this is enabled, stepping left/right from a vertical stack
   * to an adjacent vertical stack will land you at the same vertical
   * index.
   *
   * Consider a deck with six slides ordered in two vertical stacks:
   * 1.1    2.1
   * 1.2    2.2
   * 1.3    2.3
   *
   * If you're on slide 1.3 and navigate right, you will normally move
   * from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
   * from 1.3 -> 2.3.
   */
  navigationMode?: "default" | "linear" | "grid";

  /**
   * Flags if it should be possible to pause the presentation (blackout)
   * @default true
   */
  pause?: boolean;

  /**
   * Global override for autolaying embedded media (video/audio/iframe)
   * - null:   Media will only autoplay if data-autoplay is present
   * - true:   All media will autoplay, regardless of individual setting
   * - false:  No media will autoplay, regardless of individual setting
   *
   * @default null
   */
  autoplayMedia?: boolean | null;

  /**
   * Global override for preloading lazy-loaded iframes
   * - null:   Iframes with data-src AND data-preload will be loaded when within
   *           the viewDistance, iframes with only data-src will be loaded when visible
   * - true:   All iframes with data-src will be loaded when within the viewDistance
   * - false:  All iframes with data-src will be loaded only when visible
   *
   * @default null
   */
  preloadIframes?: boolean | null;

  /**
   * Specify the average time in seconds that you think you will spend
   * presenting each slide. This is used to show a pacing timer in the
   * speaker view
   * @default null
   */
  defaultTiming?: number | null;

  /**
   * Focuses body when page changes visibility to ensure keyboard shortcuts work
   * @default true
   */
  focusBodyOnPageVisibilityChange?: boolean;

  /**
   * The maximum number of pages a single slide can expand onto when printing
   * to PDF, unlimited by default
   * @default Number.POSITIVE_INFINITY
   */
  pdfMaxPagesPerSlide?: number;

  /**
   * Prints each fragment on a separate slide
   * @default true
   */
  pdfSeparateFragments?: boolean;

  /**
   * Offset used to reduce the height of content within exported PDF pages.
   * This exists to account for environment differences based on how you
   * print to PDF. CLI printing options, like phantomjs and wkpdf, can end
   * on precisely the total height of the document whereas in-browser
   * printing has to end one pixel before.
   */
  pdfPageHeightOffset?: number;

  /**
   * The display mode that will be used to show slides
   * @default "block"
   */
  display?: string;

  /**
   * Hide cursor if inactive
   * @default true
   */
  hideInactiveCursor?: boolean;

  /**
   * Time before the cursor is hidden (in ms)
   * @default 5000
   */
  hideCursorTime?: number;
}

/**
 * https://github.com/hakimel/reveal.js/#slide-changed-event
 */
interface SlideEvent {
  previousSlide?: Element;
  currentSlide: Element;
  indexh: number;
  indexv?: number;
}

/**
 * https://github.com/hakimel/reveal.js/#fragment-events
 */
interface FragmentEvent {
  fragment: Element;
}

/**
 * https://github.com/hakimel/reveal.js/#multiplexing
 */
interface MultiplexConfig {
  /**
   * Obtained from the socket.io server. Gives this (the master) control of the presentation
   */
  secret?: string;
  /**
   * Obtained from the socket.io server
   */
  id: string;
  /**
   * Location of socket.io server
   */
  url: string;
}

/**
 * https://github.com/hakimel/reveal.js/#mathjax
 */
interface MathConfig {
  /**
   * Obtained from the socket.io server. Gives this (the master) control of the presentation
   */
  mathjax: string;
  /**
   * Obtained from the socket.io server
   */
  config: string;
}

/**
 * https://github.com/hakimel/reveal.js/#dependencies
 */
interface RevealDependency {
  src: string;
  condition?: () => boolean;
  async?: boolean;
  callback?: () => void;
}
