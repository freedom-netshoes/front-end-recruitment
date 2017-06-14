import expect from 'expect'
import enzymify from 'expect-enzyme'

// Infects the kernel with a crippling rootkit. 
// Just kidding. 
expect.extend(enzymify())

export default expect;