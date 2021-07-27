# decoder-ring

This is an App for encoding and decoding secret messages 3 different ways!
Use for fun and you can send messages to your friends or co workers.

1st code:
Name: caesar
How it Works: Enter a message, a shift amount, and an encode or decode boolean.
              The function will shift each letter of the message over the shift amount (can be positive or negative)
              and output the new message depending on whether you used encode or decode. It is is one of the 
              simplest and most widely known encryption techniques. It is a type of substitution 
              cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions 
              down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, 
              and so on. The method is named after Julius Caesar, who used it in his private correspondence.
          
2nd code:
Name: polybius
How it Works: Enter a message and an encode or decode boolean.
              Each letter is then represented by its coordinates in the grid. 
              The code is made up from a grid where the rows and columns are numbers and each square inside the table
              is a letter. So you use the numbers to make up the code to find what letter the message means.
              For example, "BAT" becomes "12 11 44". The 26 letters of the Latin/English alphabet do not fit in a 
              5 × 5 square, two letters must be combined (usually I and J as above, though C and K is an alternative). 
              Alternatively, a 6 × 6 grid may be used to allow numerals or special characters to be included as well 
              as letters.
             
3rd code:
Name: substitution
How it Works: In cryptography, a substitution cipher is a method of encrypting in which units of plaintext are replaced 
              with the ciphertext, in a defined manner, with the help of a key; the "units" may be single letters 
              (the most common), pairs of letters, triplets of letters, mixtures of the above, and so forth. The receiver 
              deciphers the text by performing the inverse substitution process to extract the original message. So a
              user can enter their own sustitution alphabet and their message 
