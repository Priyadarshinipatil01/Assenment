
let x=[-1, -1, -1, 0, 0, 1, 1, 1];
 
let y=[-1, 0, 1, -1, 1, -1, 0, 1];
 
function search2D(grid,row,col,word)
{
   
        if (grid[row][col] != word[0])
            return false;
  
        let len = word.length;

        for (let dir = 0; dir < 8; dir++) {
        
            let k, rd = row + x[dir], cd = col + y[dir];
  
            for (k = 1; k < len; k++) {
              
                if (rd >= R || rd < 0 || cd >= C || cd < 0)
                    break;
  
                
                if (grid[rd][cd] != word[k])
                    break;
  
                rd += x[dir];
                cd += y[dir];
            }
  
            if (k == len)
                return true;
        }
        return false;
}
 

function patternSearch( grid,word)
{
    
        for (let row = 0; row < R; row++) {
            for (let col = 0; col < C; col++) {
                if (search2D(grid, row, col, word))
                    document.write(
                        "pattern found at " + row + ", " + col+"<br>");
            }
        }
}
 

R = 3;
C = 13;
let grid = [[ 'A', 'B', 'C', 'D', 'E', 'F', 'G',
'R', 'G', 'E', 'E', 'K', 'S' ],
 
[ 'G', 'E', 'E', 'K', 'S', 'Q', 'U', 'I', 'Z',
'G', 'E', 'E', 'K' ],
 
[ 'I', 'D', 'E', 'Q', 'A', 'P', 'R', 'A', 'C',
'T', 'I', 'C', 'E' ] ];
patternSearch(grid, "GEAFS");
document.write("<br>");
patternSearch(grid, "EEE");
 
 

