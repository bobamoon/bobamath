import curses

def main(stdscr):
    stdscr.clear()
    
    # Get screen dimensions
    height, width = stdscr.getmaxyx()
    
    # Text to display
    text = "Hello, Curses!"

    table = """1 2 3 4 5 6 7 8 9
            2                   
            3                
            4                  """  

    # Calculate position for centering
    x = (width // 2) - (len(text) // 2)
    y = height // 2
    
    # Display text at the calculated position
    stdscr.addstr(y, x, text)

    stdscr.addstr(10, 10, table)
    
    stdscr.refresh()
    stdscr.getch()  # Wait for user input before exiting

curses.wrapper(main)

