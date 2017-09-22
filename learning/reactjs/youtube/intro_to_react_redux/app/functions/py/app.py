# Define your functions here. To run the samples below, 
# from the root directory run:
# $ turbo devserver -p

# then navigate to: 
# http://localhost:3000/functions/sample

# Deploy the functions by running from root directory:
# $ turbo functions -p

def sample(event):
	return {
		'confirmation': 'success',
		'data': 'This is a sample one!'
	}

def sample_two(event):
	return {
		'confirmation': 'success',
		'data': 'This is a sample two!'
	}
