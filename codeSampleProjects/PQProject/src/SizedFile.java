import java.io.File;

/**
 * SizedFile is a wrapper around File that changes its comparison to be based on the size of the
 * file and then the name of the file.
 * 
 * It also redefines the toString to include file size.
 * 
 * @author agarripoli (c)
 * @version 20180403
 */
public class SizedFile extends File {

  /**
   * Turn a File into a SizedFile using the original data that created the File.
   * 
   * @param file the file to convert
   */
  public SizedFile(File file) {
    super(file.getPath());
  }

  @Override
  public int compareTo(File otherFile) {
    // compareTo is an int and length is a long, so
    // if the difference in size is too large,
    // use the largest legal value instead.
    long diff = this.length() - otherFile.length();
    if (diff > Integer.MAX_VALUE) {
      diff = Integer.MAX_VALUE;
    } else if (diff < Integer.MIN_VALUE) {
      diff = Integer.MIN_VALUE;
    }
    if (diff == 0) {
      return super.compareTo(otherFile);
    } else {
      return (int) diff;
    }
  }

  @Override
  public String toString() {
    return this.getPath() + "(" + this.length() + ")";
  }

}
