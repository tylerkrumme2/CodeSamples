

public class PriorityQueueTree implements IPriorityQueue{

	private PQTreeNode root; //null
	private int size; //0
	
	public PriorityQueueTree() {
		
	}
	
	public void add(SizedFile newFile) {
		root = _add(newFile, root);
		size++;	
	}
	
	private PQTreeNode _add(SizedFile newFile, PQTreeNode current) {
		if(current == null) {
			return new PQTreeNode(newFile);
		}
		if(newFile.compareTo(current.data) < 0) {
			current.left = _add(newFile, current.left);
		} else {
			current.right = _add(newFile, current.right);
		} 
		return current;
	}
	
	public void clear() {
		root = null;
		size = 0;
	}
	
	public boolean contains(SizedFile findData) {
		
		return _contains(findData, root);
	}
	
	private boolean _contains(SizedFile findData, PQTreeNode current) {
		if(current == null){
			return false;
		}
		if(current.data == findData) {
			return true;	
		}
		if(findData.compareTo(current.data) < 0) {
			return _contains(findData, current.left);
		}
		assert findData.compareTo(current.data) > 0;
		return _contains(findData, current.right);
	}

	public SizedFile[] toArray() {
		SizedFile[] treeAsArray = new SizedFile[size];
		_toArray(root, treeAsArray, 0);
		return treeAsArray;
	}
	
	private int _toArray(PQTreeNode current, SizedFile[] treeAsArray, int index) {
		if(current == null) {
			return index;
		}
		index = _toArray(current.left, treeAsArray, index);
		treeAsArray[index++] = current.data;
		index = _toArray(current.right, treeAsArray, index);
		return index;
	}
	
	public boolean isEmpty() {
		return (size == 0);
	}
	
	public SizedFile peek() {
		if(root == null) {
			return null;
		}
		
		PQTreeNode current = root;
		while(current.left != null){
			current = current.left;
		}
		return current.data;
	}
	
	public SizedFile remove() {
		if(root == null) {
			return null;
		}
		
		PQTreeNode current = root;
		PQTreeNode parent = null;
		while(current.left != null){
			parent = current;
			current = current.left;
		}
		
		
		if(parent == null) {
			root = current.right;
		} else {
			parent.left = current.right;
		}
		size--;
		
		return current.data;
	}
	
	public int size() {
		if(this.size > Integer.MAX_VALUE) {
			return Integer.MAX_VALUE;
		}
		return this.size;
	}
	
	public String toString() {
		return "[" + _toString(root) + "]";
	}
	
	private String _toString(PQTreeNode current) {
		String comma = " ";
		if(current == null) {
			return "";
		}
		if(current !=null) {
			comma = ", ";
			PQTreeNode x = root;
			while(x.right != null) {
		        x = x.right;
		    }
			if(current.equals(x)){
				comma = " ";
			}
		}
		
		return  _toString(current.left) + " " + current.data + comma + _toString(current.right);
	}
	
	public class PQTreeNode {
		public final SizedFile data;
		public PQTreeNode left;
		public PQTreeNode right;
		
		public PQTreeNode(SizedFile file){
			this.data = file;
		}
	}
}



