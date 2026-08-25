The Nyquist Theorum states that:

>Nyquist's theorem states that **a periodic signal must be sampled at more than twice the highest frequency component of the signal**.

That sounds like absolute **bullshit** no?
Let me try explain:

An analogy to understand this concept is imagining a person taking pictures of a moving object. If the object is moving very fast, the person needs to take pictures at a high rate to capture all the details.
works in a similar way - if the signal changes rapidly, we need to sample it more frequently
to capture all the information accurately.  
  
For example, let's consider a sound wave with a maximum frequency of 10,000 Hz.
According to the Nyquist Sampling theorem, the sampling rate should be at least 20,000 samples per second to accurately represent the signal. If we sample at a lower rate, we may miss high-frequency components, leading to distortion or loss of information.

This is the reason why the standard sample rate for music is 44100hz.
Humans can only hear frequencies up to 22000hz, so:

2x22000 = 44000 
And then we add 100 just to be safe and so we don't miss out anything accidentally.

-----

## Sample Rate = frequency x N: Where N is >= 2